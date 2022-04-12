<script lang="ts">
import Header from './Header.svelte'
import Main from './Main.svelte'
import Footer from './Footer.svelte'

export let config
</script>

<Header config={config} />
<Main><slot/></Main>
<Footer config={config} />
