'''
db.places.updateOne(
  { _id: 12 },
  { $set: { "review_scores.review_scores_rating": 65 } }
)
db.places.updateMany(
  { "host.host_name": "José Edmílson" },
  { $set: { "host.host_identity_verified": true } }
)
'''
