import React from 'react';

interface EmptyStateProps {
    imageUrl: string;
    description: string;
}


export const EmptyState : React.FC<EmptyStateProps> = ({ imageUrl, description }) => {
    return (
        <div className='text-center flex items-center flex-col mt-[200px]'>
            <img src={imageUrl} className='w-[160px] opacity-70' />
            <div className='mt-8 text-xl font-medium text-slate-500'>{description}</div>
        </div>
    )
}