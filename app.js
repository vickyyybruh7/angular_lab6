var app = angular.module("galleryApp", [])

app.controller("GalleryController", ($scope, $http) => {
  // Load data from JSON file
  $http.get("data.json").then((response) => {
    $scope.galleryData = response.data.gallery
  })

  $scope.likeImage = (image) => {
    image.likes++
  }

  $scope.onImageFocus = (image) => {
    image.isSelected = true
  }

  $scope.onImageBlur = (image) => {
    image.isSelected = false
  }
})

