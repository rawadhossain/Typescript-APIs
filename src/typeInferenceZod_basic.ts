import { z } from 'zod';

// Define a Zod schema
const UserSchema = z.object({
    name: z.string(),
    age: z.number(),
});

// Extract TypeScript type using z.infer
type User = z.infer<typeof UserSchema>;

// Now the type User is equivalent to:
type User = {
    name: string;
    age: number;
};

// Use it in a function
const printUser = (user: User) => {
    console.log(`${user.name} is ${user.age} years old`);
};

// Valid input
printUser({ name: 'Alice', age: 30 }); // Works!

// Invalid input
// printUser({ name: "Alice" }); // Error: Property 'age' is missing
