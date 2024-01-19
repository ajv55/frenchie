import * as React from 'react';

interface EmailTemplateProps {
  firstName: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  message
}) => (
  <div className='flex justify-center items-center flex-col'>
    <h1 className='text-blue-400 text-2xl'>Welcome, {firstName}!</h1>
    <p className='text-red-400 text-2xl'>{message}</p>
  </div>
);