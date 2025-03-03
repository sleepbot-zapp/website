<script lang="ts">
  type Author = {
    name: string;
    github: string;
    pfp: string;
  };
  export let data: {
    title: string;
    banner: string;
    slug: string;
    author: Author;
    html: string;
  };
</script>

<div class="prose max-w-full lg:max-w-[60rem]">
  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam tenetur, et
  deleniti, velit, officia suscipit maiores libero error distinctio animi
  mollitia minima. Aliquam vel quam hic rerum at est dicta.
  <a href="https://github.com">https://github.com</a>.
</div>
