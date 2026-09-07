// Attach CEO Photo: give each presenter option the reference photo as binary "photo" for the image edit call.
const items = $('Uses CEO Photo?').all(0);
let photo = null;
try { photo = $('Fetch CEO Photo').first().binary.data; } catch (e) { photo = null; }
return items.map(it => photo
  ? { json: { ...it.json }, binary: { photo } }
  : { json: { ...it.json, photoMissing: true } });
