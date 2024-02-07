import { EmailTemplate } from '../../component/email-template';
import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);



export async function POST(resquest: NextRequest, response: NextResponse) { 


    try {
        const body =  await resquest.json();

        const { firstname, lastname, message, email } = body;

        const data =  await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'abejevilla55@gmail.com',
            subject: 'hello ',
            reply_to: email,
            react: EmailTemplate({firstName: firstname, message: message}),
            text: message,
        
        });

        console.log(data)



        return NextResponse.json(data)
        
    } catch (error) {
        console.error('error', error)
        return NextResponse.json(error)
        
    }
    
}