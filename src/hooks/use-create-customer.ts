// import { createCustomer } from "@/actions/customer.actions"
// import { createCustomerSchema } from "@/schemas/customer.schema"
// import { zodResolver } from "@hookform/resolvers/zod"
// import { useState } from "react"
// import { useForm } from "react-hook-form"
// import { z } from "zod"
// import { toast } from "./use-toast"

// export const useCreateCustomer = () => {
//     const [open, setOpen] = useState(false)
//     const [loading, setLoading] = useState(false)

//     const form = useForm({
//         resolver: zodResolver(createCustomerSchema),
//         defaultValues: {
//             name: "",
//             email: "",
//             domainId: "",
//         }
//     })

//     const onSubmit = async (values: z.infer<typeof createCustomerSchema>) => {
//         console.log(values);

//         setLoading(true)
//         try {
//             const res = await createCustomer(values);

//             if (res.success) {
//                 setOpen(false);
//                 form.reset();
//                 toast({ title: res.message })
//             } else {
//                 toast({ title: res.message, variant: "destructive" })
//             }
//         } catch (error) {
//             console.log(error);
//             toast({
//                 description: "Something went wrong",
//                 title: "Error",
//                 variant: "destructive"
//             })
//         } finally {
//             setLoading(false)
//         }
//     }

//     return { form, onSubmit, loading, open, setOpen }
// }