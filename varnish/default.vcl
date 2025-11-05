vcl 4.1;

backend app { .host = "192.168.1.141"; .port = "3000"; }

sub vcl_backend_response {
  set beresp.ttl = 30s;    # do NOT honor origin TTLs
  set beresp.grace = 0s;   # do NOT serve stale; followers will wait
}