'use server';

import { z } from 'zod';
import postgres from 'postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

const sql = postgres(process.env.DATABASE_URL!);

const FormSchema = z.object({
    id: z.string(),
    customerId: z.string(),
    amount: z.coerce.number(),
    status: z.enum(['pending', 'paid']),
    date: z.string(),
  });
   
  const CreateInvoice = FormSchema.omit({ id: true, date: true });
export async function createInvoice(formData: FormData){
    const {customerId, amount, status} = CreateInvoice.parse({
        customerId: formData.get('customerId') || '',
        amount: formData.get('amount') || '0',
        status: formData.get('status') || 'pending',
    });
    const amountInCents = amount * 100;
    const date = new Date().toISOString().split('T')[0];
    await sql`
        INSERT INTO invoices (customer_id, amount, status, date)
        VALUES (${customerId}, ${amountInCents}, ${status}, ${date})
    `;
    revalidatePath('/dashboard/invoices');
    redirect('/dashboard/invoices'); 
    console.log({customerId, amountInCents, status, date});
}

export async function updateInvoice(formData: FormData) {
    const {customerId, amount, status} = CreateInvoice.parse({
        customerId: formData.get('customerId') || '',
        amount: formData.get('amount') || '0',
        status: formData.get('status') || 'pending',
    });
    const amountInCents = amount * 100;
    const date = new Date().toISOString().split('T')[0];
    await sql`
        UPDATE invoices 
        SET customer_id = ${customerId}, amount = ${amountInCents}, status = ${status}, date = ${date}
        WHERE id = ${formData.get('id')}
    `;
    revalidatePath('/dashboard/invoices');
    redirect('/dashboard/invoices');
}