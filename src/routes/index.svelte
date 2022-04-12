<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	import type {Ivent} from '@/src/types/ivent'

export const load: Load = async ({ fetch, params }) => {
		const
            response = await fetch('/api/ivents.json'),
            data: Ivent[] = await response.json()
        return {
            props: {data}
        }
		// return {
		// 	error: 'Page not found',
		// 	status: 404
		// };
	};
</script>

<script lang="ts">
    import {MetaTags} from 'svelte-meta-tags'
    import { goto } from '$app/navigation';

    import {Swiper, SwiperSlide} from 'swiper/svelte'
    import { Autoplay, Pagination,  Navigation, A11y} from 'swiper';
    import 'swiper/css';
    import 'swiper/css/navigation';
    import 'swiper/css/pagination';

    import IventCard from '@/src/components/atoms/IventCard.svelte';
    import Title from '../components/atoms/Title.svelte';


	export let data: Ivent[];
</script>


<MetaTags title="Home"/>

<Swiper
    modules={[Autoplay, Pagination, Navigation, A11y]}
    spaceBetween={50}
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    on:slideChange={() => console.log('slide change')}
    on:swiper={(e) => console.log(e.detail[0])}
>
    {#each data as ivent}
        <SwiperSlide>
            <img
                src="{ivent.metadata.imageURL}"
                alt="{ivent.metadata.title}"
                class="w-96 mx-auto mb-10"
                on:click={() => goto(ivent.url)}
            >
        </SwiperSlide>
    {/each}
</Swiper>

<div class="mx-20 h-96">
    <Title>IVENT</Title>
    <div class="flex gap-7">
        {#each data as ivent}
        <IventCard ivent={ivent} />
        {/each}
    </div>
</div>