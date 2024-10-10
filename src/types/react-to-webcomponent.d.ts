declare module 'react-to-webcomponent' {
    import { ComponentType } from 'react';

    export default function define(
        name: string,
        component: ComponentType,
        React: React,
        ReactDOM: ReactDOM
    ): void;
}
