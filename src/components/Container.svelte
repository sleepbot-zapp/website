<div>
    <span class="underline text-lg font-extrabold font-bold hover:text-red-300">
        {c.title}
    </span>
    <span class="text-xs">
        {c.time}
    </span>
</div>


<script lang="ts">
  import type { Content } from "../types/content";

    export let c: Content;
</script>