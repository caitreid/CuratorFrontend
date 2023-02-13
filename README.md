# Art Exhibition App | Frontend Repo

[Link to Backend Repo](https://github.com/caitreid/projectThreeBackend)

## Description

Art Gallery App allows users to view museum collections and create their own online exhibitions. Each curated exhibition will have a unique title, description, viewing dates and a series of artworks chosen from the overall Met Museum collection. Users will be able to view hundred of artworks from the MET API, filtered by department. The website will also featured an index of user-created exhibitions.

To create this app, we take in data using the Met's Open Access API ( https://metmuseum.github.io/ ). This API contains thousands of objects, each representing one piece of individual artwork, ranging from paintings, sculpture and ceramics to costumes, furniture and more. We created an artwork model that matched many of the API's existing fields, such title, description, date period, artist name, dimensions, medium (type of artwork) and the department in which it resides. Once we created individual artworks, we created an index of total artworks through which users could browse. Once a user signs in and creates their profile, they are able to create their own exhibition. Upon submission, a unique link is generated for the user to share with family and friends.

## Wireframes
Wireframes were created in Figma and can be viewed at this [link](https://www.figma.com/file/DHUztB6IaUgp0uYTTQKJId/SEI-Project-3?node-id=0%3A1&t=iQouSBqQ90jxXsxJ-1).

### Homepage
<img src="./private/Project_3_wireframes_Page_1.png" />


### Department Index
<img src="./private/Project_3_wireframes_Page_2.png" />

### Department Show
<img src="./private/Project_3_wireframes_Page_3.png" />

### Artwork Show
<img src="./private/Project_3_wireframes_Page_4.png" />

### Exhibition Create
<img src="./private/Project_3_wireframes_Page_5.png" />

### Exhibition Index
<img src="./private/Project_3_wireframes_Page_6.png" />

### Exhibition Show
<img src="./private/Project_3_wireframes_Page_7.png" />

### User Dashboard
<img src="./private/Project_3_wireframes_Page_8.png" />