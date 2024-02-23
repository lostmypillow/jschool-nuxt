export default {
    root: {
        class: 'w-screen overflow-x-auto drop-shadow-2xl'
    },
    menu: {
        class: [
            // Flexbox
            'flex flex-1 justify-between',

            // Spacing
            
            'p-4 m-0 ',

            // Colors
            'bg-surface-0 ',
            'border-none',
            'text-surface-900 '
        ]
    },
    menuitem: {
        class: 'flex basis-1/4 justify-center items-center grow-1'
    },
    inkbar: {
        class: 'hidden'
    },
    label: {
        class: [
            'text-xs md:text-s'
        ]
    },
    action: ({ context, state }) => ({
        class: [
            'relative',

            // Font
            'font-bold',

            // Flexbox and Alignment
            'flex items-center',

            // Spacing
            'p-2',
            '-mb-[2px]',

            // Shape
            ,
            'rounded-t-md',

            // Colors and Conditions
            {
                'border-surface-200 ': state.d_activeIndex !== context.index,
                'bg-surface-0 ': state.d_activeIndex !== context.index,
                'text-surface-700 ': state.d_activeIndex !== context.index,

                'bg-surface-0 ': state.d_activeIndex === context.index,
                'border-primary-500 ': state.d_activeIndex === context.index,
                'text-primary-500': state.d_activeIndex === context.index
            },

            // States
            'focus-visible:outline-none focus-visible:outline-offset-0 focus-visible:ring focus-visible:ring-inset',
            'focus-visible:ring-primary-400/50',
            {
                'hover:bg-surface-0': state.d_activeIndex !== context.index,
                'hover:border-surface-400': state.d_activeIndex !== context.index,
                'hover:underline decoration-primary-500 decoration-solid decoration-4 underline-offset-2': state.d_activeIndex !== context.index
            },

            // Transitions
            'transition-all duration-200',

            // Misc
            'cursor-pointer select-none text-decoration-none',
            'overflow-hidden',
            'user-select-none'
        ]
    }),
    icon: {
        class: 'mr-2'
    }
};
