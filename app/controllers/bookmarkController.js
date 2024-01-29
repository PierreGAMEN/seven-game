const bookmarksController = {

  // méthode pour afficher les favoris
  bookmarksPage: (request, response) => {
    const figurineBookmarks = request.session.bookmarks
    response.render('favoris.ejs', {
      figurineBookmarks
    } 
    )
  }, 

  addFigurineToBookmarks: async (request, response) => {
    const figurineId = request.params.id;

    if(!request.session.bookmarks) {
      request.session.bookmarks = []
    }
   const foundFigurine = request.session.bookmarks.find((figurine) => figurine.id == figurineId)
   
   if(!foundFigurine) {
    const oneFigurine = await dataMapper.getOneFigurine(figurineId)
    request.session.bookmarks.push(oneFigurine[0])
   }
   response.redirect('/bookmarks')
  },

  deleteFigurineToBookmarks: async (request, response) => {
    const figurineId = request.params.id;
    if(request.session.bookmarks) {
    request.session.bookmarks = request.session.bookmarks.filter((figurine) => {
    return figurine.id != figurineId
  })
}
   response.redirect('/bookmarks')
  }
  
};