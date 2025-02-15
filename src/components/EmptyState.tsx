import classNames from 'classnames';
import React from 'react';

interface EmptyStateProps {
    imageUrl: string;
    description: string;
    descriptionClassName?: string;
}


export const EmptyState: React.FC<EmptyStateProps> = ({ imageUrl, description, descriptionClassName }) => {
    return (
        <div className={'text-center flex items-center flex-col mt-[200px]'}>
            <img src={imageUrl} className='w-[160px] opacity-70' />
            <div className={classNames('mt-8 text-base font-medium text-slate-500', descriptionClassName)}>
                {description}
            </div>
        </div>
    )
}