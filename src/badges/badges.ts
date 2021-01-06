type Badge = {
  id: string;
  name: string;
  contentId: string;
  systemId: string;
  created: string;
  updated: string;
};

/*
------------------------------ create
[POST] /badges
{
  name: "",
  contentId: "",
  systemId: ""
}

responses:
- location header
--- /badges/{badge_id}
- response status codes
--- 201 (CREATED)

------------------------------ read
[GET] /badges/{badge_id}

responses:
- response status codes
--- 200 (OK)
--- 404 (NOT FOUND)
- response JSON:
{
  id...
  name...
  contentId...
  ....
}

------------------------------ update
[PUT] /badges/{badge_id}
[PATCH] /badges/{badge_id} - modification
{
  name: "",
  contentId: "",
  systemId: ""
}

responses:
- response status codes

------------------------------ delete
[DELETE] /badges/{badge_id}

respones:
- response status codes
--- 200 (OK)
--- 202 (ACCEPTED), if the action has been queued
--- 204 (NO CONTENT), the response does_not include an entity
--- 404 (NOT FOUND)
*/
