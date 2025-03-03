<script lang="ts">
  import Container from "../components/Container.svelte";
  import type { Content } from "../types/content";

  // export let data: {
  //   recentPosts: PostPreview[];
  // };
  let x: Content = {title:"Hello", time:"3 March 2025"}
</script>

<div>
  <h1 class="text-3xl font-bold">Recent Posts</h1>
  <ul class="marker:text-accent list-disc m-4">
    <li>
      <Container c={x}></Container>
    </li>
  </ul>
</div>
