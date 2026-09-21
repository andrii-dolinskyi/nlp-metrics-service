# n8n node code

Source of truth for the Code nodes and long prompts of Content Maker 6.0 (`n8n/cm6/`) and the evaluator nodes of the Money Calculator (`n8n/money/`).

`manifest.json` maps each file to a workflow, a node and a parameter. The helper workflow **CM6 Code Loader** (`POST https://n8n-test.snoika.com/webhook/cm6-load-code`, optional body `{"workflowId": "..."}` to load one workflow only) reads the manifest and the files from this branch on GitHub and writes them into the node parameters through the n8n API, so the prompts live inside the nodes (reviewable in the editor) and are versioned here. After editing a file: push, call the loader, then publish the workflow in n8n.

`n8n/cm6/prep_writer.js` embeds `docs/prompts/cm6_writer_guidelines.md`; `n8n/cm6/prep_update.js` embeds `docs/prompts/cm6_style_editor.md`. Rebuild both with `python3 tools/build_n8n_code.py` after editing the markdown.

`removed_page_types.json` lists the page types dropped on 2026-09-21 because their schema needed structured data from the client; the CM6 Spec Seeder deletes those rows from the `page_type_specs` table.
