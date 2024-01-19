'use server';


import { z } from 'zod';
import { EmailTemplate } from './component/email-template';

import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import {toast} from 'react-hot-toast';

const resend = new Resend(process.env.RESEND_API_KEY);

const FromSchema = z.object({
    firstname: z.string(),
    lastname: z.string(),
    message: z.string(),
    email: z.string().email(),

})







export const sendEmail = async (formData?: FormData) => {
    const rawFormData = FromSchema.parse({
        firstname: formData?.get('firstname'),
        lastname: formData?.get('lastname'),
        message: formData?.get('message'),
        email: formData?.get('email')
    })

    

    return rawFormData;
}