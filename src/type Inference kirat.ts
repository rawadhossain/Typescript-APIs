import { z } from 'zod';
import express from 'express';

const app = express();

// Define the schema for profile update
const userProfileSchema = z.object({
    name: z.string().min(1, { message: 'Name cannot be empty' }),
    email: z.string().email({ message: 'Invalid email format' }),
    age: z
        .number()
        .min(18, { message: 'You must be at least 18 years old' })
        .optional(),
});

export type FinalUserSchema = z.infer<typeof userProfileSchema>;
/*  a custom type called FinalUserSchema is created having the type of variables that userProfileSchema has
    - Static type safety: It ensures your TypeScript types match the schema.
    - No duplication: You don’t need to manually define the TypeScript type separately.
*/

app.put('/user', (req, res) => {
    const { success } = userProfileSchema.safeParse(req.body);
    const updateBody: FinalUserSchema = req.body; // how to assign a type to updateBody?
    //body will be updated following the type finalUserSchema

    if (!success) {
        res.status(411).json({});
        return;
    }
    // update database here
    res.json({
        message: 'User updated',
    });
});

app.listen(3000);
