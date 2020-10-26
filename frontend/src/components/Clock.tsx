import React, { useEffect, useState } from "react";

interface ClockProps {

}

const useCurrentDate = (interval: number = 1000) => {
    const [date, setDate] = useState<Date>(new Date());
    useEffect(() => {
        const timer = setInterval(() => {
            setDate(new Date());
        }, interval);

        // useEffectのreturn内では更新前の値を取得できる
        // https://qiita.com/shimarin/items/7b1e2ce8efc59d42f581
        return () => { clearInterval(timer) };
    }, [setDate]);

    return date;
}

// 時計
// https://sbfl.net/blog/2020/08/21/use-react-hooks-easy/
const Clock: React.FC = (props: ClockProps) => {
    const currentDate = useCurrentDate(1000);

    return (
        <div>{currentDate.toLocaleTimeString()}</div>
    )
}

export default Clock;