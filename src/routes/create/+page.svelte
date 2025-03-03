<script lang="ts">
  import pkg from "showdown";
  import { type Converter as Cvt } from "showdown";
  const { Converter } = pkg;
  import { onMount } from "svelte";
  import hljs from "highlight.js";
  import "highlight.js/styles/a11y-dark.css";

  let converter: Cvt;
  let markdown: string = "# Post Title Here";
  let html: string;

  onMount(() => {
    converter = new Converter();
    converter.setOption("parseImgDimensions", true);
    converter.setOption("simplifiedAutoLink", true);
    converter.setOption("tables", true);
    converter.setOption("strikethrough", true);
    converter.setOption("tasklists", true);
    converter.setOption("emoji", true);
    converter.setOption("underline", true);
    converter.setOption("smoothLivePreview", true);
  });

  $: if (converter) {
    html = converter.makeHtml(markdown);
    hljs.highlightAll();
  }
</script>

<div class="flex gap-2 flex-col md:flex-row">
  <div
    class="basis-1/2 min-h-36 bg-base-2 p-1"
    contenteditable
    bind:innerText={markdown}
  ></div>
  <div class="prose basis-1/2">{@html html}</div>
</div>
