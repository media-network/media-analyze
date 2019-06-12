import sessionService from 'services/session'

export default {
  get: [
    async (req, res, next) => {
      try {
        const { account } = req.session

        if (!account) {
          return res.redirect('/login')
        }

        return res.render('admin/dashboard', { account })
      } catch (e) {
        return res.redirect('/login')
      }
    }
  ]
}