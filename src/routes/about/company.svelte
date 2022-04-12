<script lang="ts">
    import {MetaTags} from 'svelte-meta-tags'
    import Paper from '@/src/components/atoms/Paper.svelte';
    import Title from '@/src/components/atoms/Title.svelte';
    import config from '$lib/config.json'
</script>
<MetaTags title="COMPANY" />

<Title>
    COMPANY
</Title>
<div class="px-7">
    <Paper class="border border-black mx-auto py-10 px-5 text-center" style="max-width: 500px;">
        <Title>Vision</Title>
        <div class="text-center text-2xl" >挑戦者よ、前に進め 最速で</div>
        <br>
        <div class="text-slate-600 text-sm">
            <p>習い事、部活動、受験、就職活動、恋愛、結婚...</p>
            <br>
            <p>これまでの人生で経験してきた数々の挑戦。</p>
            <p>そこには関わり、助けてくれた人たちがいる。</p>
            <br>
            <p>今、あなたはどれくらい挑戦しているだろうか。</p>
            <p>あなたが社会で関わっている人はどれほどいるだろうか。</p>
            <br>
            <p>関わりをもっと増やすことはできないか。</p>
            <p>挑戦にもっと多様な観点をもたせることはできないのか。</p>
            <br>
            <p>はじめの一歩をもっと気軽に。</p>
            <p>我々は、挑戦する全ての人を応援しています。</p>
            <br>
            <p class="text-black text-lg">挑戦者が最速で前に進める世界へ。</p>
            <br>
        </div>
        <table class="text-slate-600 mx-auto">
            <tr>
                <td>会社名</td>
                <td>{config.company.name}</td>
            </tr>
            <tr>
                <td>代表</td>
                <td>{config.company.representative}</td>
            </tr>
            <tr>
                <td>設立</td>
                <td>{config.company.establish_date}</td>
            </tr>
            <tr>
                <td>所在地</td>
                <td>{config.company.place}</td>
            </tr>
            <tr>
                <td>お問い合わせ先</td>
                <td>{config.company.contact_email}</td>
            </tr>
        </table>
    </Paper>
</div>
