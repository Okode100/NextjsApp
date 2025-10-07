'use server';
export async function createInvoice(formData: FormData){
    const rawFormData = {
        customersName: formData.get('customersName'),
        customerId: formData.get('customerId'),
        amount: formData.get('amount'),
        status: formData.get('status')
    }
     console.log(rawFormData);


}