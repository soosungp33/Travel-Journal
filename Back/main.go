package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

type List struct {
	Image string `json:"image"`
	Name  string `json:"name"`
}

func ListAlbum(c *gin.Context) {
	list1 := List{Image: "1", Name: "부산 여행"}
	list2 := List{Image: "3", Name: "경주 여행입니다."}
	data := make(map[int]List)
	data[1] = list1
	data[2] = list2
	c.JSON(http.StatusOK, data)
}

func main() {
	r := gin.Default()
	r.GET("/list", ListAlbum)
	r.Run(":8080")
}
