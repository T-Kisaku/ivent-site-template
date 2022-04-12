<script lang="ts">
    export let type: 'outline' | 'contain' = 'outline'
    import { createEventDispatcher } from 'svelte'

    const dispatcher = createEventDispatcher()


    const getButtonClass = () => {
        let buttonClass = $$props.class
        switch(type){
            case 'contain':
                buttonClass += ' bg-zinc-700 text-white'
                break
            case 'outline':
                buttonClass += ' border border-black'
                break
        }
        return buttonClass
    }
</script>
<button
    {...$$props}
    class="{getButtonClass()} rounded-md px-5 py-2"
    on:click={() => dispatcher('click')}
>
    <slot></slot>
</button>