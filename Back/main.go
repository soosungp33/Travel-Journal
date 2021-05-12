package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func HomePage(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{
		"message": "홈페이지 입니다.",
	})
}

func main() {
	r := gin.Default()
	r.GET("/home", HomePage)
	r.Run(":8080")
}
