import { EmailTemplate } from '../../component/email-template';
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);



export async function POST(resquest: NextResponse) { 


    try {
        const body =  await resquest.json();
        console.log(body)

        const { firstname, lastname, message, email } = body;

        const data =  await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'abejevilla55@gmail.com',
            subject: 'hello ',
            reply_to: email,
            react: EmailTemplate({firstName: firstname, message: message}),
            text: message,
        
        });



        return NextResponse.json(data)
        
    } catch (error) {
        console.error('error', error)
        return NextResponse.json(error)
        
    }
    
}