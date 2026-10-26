// The one context item every later node reads, whichever way the request arrived (trigger, webhook, restart).
return [{ json: $input.first().json }];
