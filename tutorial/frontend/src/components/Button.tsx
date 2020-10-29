import React from 'react';

type Props = {
    onClick: () => void,
    labelName: string | undefined
    className: string | undefined
}

const Button: React.FC<Props> = (props: Props) => {

    return (
        <button className={props.className} onClick={props.onClick}>
            {typeof props.labelName === 'string' ? props.labelName : 'ボタン'}
        </button>
    )
}

export default Button;