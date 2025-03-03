<script lang="ts">
  type PostPreview = {
    title: string;
    description: string;
    postedAt: string;
  };

  export let data: {
    recentPosts: PostPreview[];
  };

</script>

<div>
  <h1 class="text-3xl font-bold">Recent Posts</h1>
  <ul class="marker:text-accent list-disc m-4">
    <li>
      <span class="underline text-red-100">8th Mar 2024</span>
      <span class="font-bold">Hello World!</span>
    </li>
  </ul>
</div>
