import { forwardRef, useEffect, useImperativeHandle, useRef, InputHTMLAttributes } from 'react';
import { Input } from "@/shadcn/ui/input"


export default forwardRef(function TextInput(
    { type = 'text', className = '', isFocused = false, ...props }: InputHTMLAttributes<HTMLInputElement> & { isFocused?: boolean },
    ref
) {
    const localRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => ({
        focus: () => localRef.current?.focus(),
    }));

    useEffect(() => {
        if (isFocused) {
            localRef.current?.focus();
        }
    }, []);

    return (
        <Input
            {...props}
            type={type}
            className={
                'border-gray-300 focus:border-primary bg-slate-50 focus:ring-primary shadow-sm ' +
                className
            }
            ref={localRef}
        />
    );
});
