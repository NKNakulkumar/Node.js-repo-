import z from "zod";

// const ageschems = z.number().min(18).max(100).int()
// const userage = 17;
// const {data,success,error} = ageschems.safeParse(userage)
// console.log(error);

const schema = z.coerce.number().min(1).max(6000).default(3000);
export const PORT = schema.parse(process.env.PORT )