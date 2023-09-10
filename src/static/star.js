const Star = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaGVpZ2h0PSIyNCIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6Y2M9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zIyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTEwMjguNCkiPjxwYXRoIGQ9Im02Ni4zNiAxMTIxLjYtMC42MzYtMC43di0xLjItMS4ybDAuMzktMi4yYzAuMjE0LTEuMyAwLjM5LTIuMyAwLjM5LTIuNHMtMC4xMy0wLjEtMC41MjQtMC4zbC0wLjUyNS0wLjMtMC41NDQtMS4zYy0wLjMtMC44LTAuNTQ3LTEuNC0wLjU0OS0xLjVzMC4wOTEtMC4zIDAuMjE1LTAuNGMwLjIxOC0wLjQgMC4yMi0wLjQgMC4yMi0wLjh2LTAuNGgtMC41MTYtMC41OTdjLTAuMDQ1LTAuMS0wLjE4MS0wLjMtMC4zMDItMC41bC0wLjIxOS0wLjVoLTAuMzM1bC0wLjMzNCAwLjEtMS4xNDktMC43LTEuMTQ5LTAuNi0wLjM2LTAuNWMtMC4xOTgtMC4yLTAuMzk0LTAuNC0wLjQzNS0wLjQtMC4wNDItMC4xLTAuMjU5LTAuMS0wLjQ4Mi0wLjFoLTAuNDA3bC0xLjIzMS0xLjYtMS4yMy0xLjYgMC4wNTMtMC45IDAuMDUzLTAuOC0wLjM4MS0wLjVjLTAuMjA5LTAuMy0wLjQxNi0wLjYtMC40NTgtMC42LTAuMDU0LTAuMS0wLjE0OS0wLjEtMC4zMDMgMGgtMC4yNzVjLTAuMDI4IDAtMC4xMjUtMC4yLTAuMjE2LTAuNC0wLjE3My0wLjMtMC4xNjMtMC40IDAuMDU2LTAuNGgwLjExOWMwLTAuMS0xLjAwOS0xLjEtMS4xNC0xLjItMC4wNTcgMC0wLjQ0LTAuMS0wLjg1Mi0wLjJsLTAuNzQ4LTAuMS0xLjg4IDFjLTEuMDM0IDAuNS0xLjg5MyAwLjktMS45MDggMC45LTAuMDE1LTAuMSAwLjI0LTAuMyAwLjU2Ny0wLjcgMC4zMjgtMC4zIDAuNTk1LTAuNiAwLjU5NS0wLjZzLTAuMjA5LTAuMi0wLjQ2NC0wLjRjLTAuMjU2LTAuMi0wLjQ3NS0wLjQtMC40ODgtMC40LTAuMDEzLTAuMS0wLjExMS0wLjctMC4yMTgtMS40LTAuMTc4LTEuMi0wLjE4Ny0xLjMtMC4xMTQtMS40IDAuMDQ0IDAgMC40MTEtMC4yIDAuODE2LTAuNGwwLjczNy0wLjQgMy43OCAwLjRjMi4wNzkgMC4yIDMuODMzIDAuNCAzLjg5NiAwLjQgMC4wOTggMCAwLjEwNyAwIDAuMDU1LTAuMS0wLjAzNCAwLTAuMzA4LTAuMi0wLjYwOS0wLjQtMC4zMDItMC4yLTAuNTc1LTAuNC0wLjYwOS0wLjUtMC4wNSAwLTAuMDMyLTAuMiAwLjA5Ny0wLjcgMC4wODctMC40IDAuMTgzLTAuNyAwLjIxMy0wLjdzMS44MTEtMC43IDMuOTU3LTEuNmwzLjkwMy0xLjUgMS4xMjIgMC4xYzEuNjIzIDAuMSAxLjg4NSAwLjEgMS44NjggMC4yLTAuMDA4IDAtMC41NzUgMC43LTEuMjU5IDEuNC0wLjY4NCAwLjgtMS4yNiAxLjUtMS4yODEgMS41cy0wLjAwNCAwLjEgMC4wNCAwLjFjMC4wNDIgMC4xIDAuODMyIDAuNyAxLjc1NiAxLjUgMC45MjQgMC43IDEuNjggMS40IDEuNjggMS40cy0wLjI0OSAwLjMtMC41NTMgMC43bC0wLjU1MyAwLjUtMS4wMi0wLjFjLTAuNTYxLTAuMS0xLjAzOS0wLjMtMS4wNjMtMC4zLTAuMDI2IDAgMC4wMDEtMC4zIDAuMDY3LTAuNiAwLjA2LTAuMyAwLjA5Ny0wLjYgMC4wODEtMC42LTAuMDIyLTAuMS0wLjEwNS0wLjEtMC4zNDQtMC4xLTAuMTc0IDAtMC4zMyAwLTAuMzQ2IDAuMS0wLjAxNiAwLTAuMDk1IDAuMi0wLjE3NCAwLjRsLTAuMTQ1IDAuNCAwLjEwNiAwLjRjMC4wNTggMC4yIDAuMDkyIDAuNCAwLjA3NSAwLjRoLTAuNjU0Yy0xLjAyOC0wLjEtMC45MS0wLjItMS4zMjYgMC40LTAuMTk4IDAuMy0wLjM3IDAuNS0wLjM4MSAwLjYtMC4wMTMgMCAwLjA4IDAuMiAwLjI1NSAwLjMgMC4yMTIgMC4yIDAuMzcxIDAuMyAwLjY5OCAwLjMgMC4yMzMgMC4xIDAuNDk0IDAuMiAwLjU3OSAwLjIgMC4xMDggMC4xIDAuMzAyIDAuMiAwLjYzNCAwLjYgMC4yNjQgMC4zIDAuNTEgMC42IDAuNTQ4IDAuNiAwLjA2NCAwIDAuMzk0LTAuOSAwLjM5NC0xLjEgMCAwLTAuMDQzLTAuMS0wLjA5Ny0wLjItMC4wODYtMC4xLTAuMDk4LTAuMi0wLjA5OC0wLjdzMC4wMDgtMC42IDAuMDkxLTAuNmMwLjI0IDAgMi40NzcgMC40IDIuNTI0IDAuNSAwLjAzIDAgMC40ODkgMC41IDEuMDIgMS4yIDAuODI1IDEgMC45NTUgMS4xIDAuODk3IDEuMi0wLjAzOCAwLTAuNjcxIDAuNC0xLjQwOSAwLjgtMC43MzcgMC41LTEuMzUxIDAuOC0xLjM2NSAwLjgtMC4wMTUgMC0wLjAzNyAwLjItMC4wNSAwLjVsLTAuMDI1IDAuNGgtMC4yNDZjLTAuMjQgMC0wLjI1MSAwLTAuNDc5IDAuMi0wLjE5MSAwLjItMC4yMjggMC4zLTAuMjA3IDAuNCAwLjEwNSAwLjUgMC4xNDkgMC40LTAuNDc4IDEtMC4zNzUgMC4zLTAuNTY1IDAuNS0wLjU2NSAwLjUgMC4wMDEgMC4xIDAuMDU1IDAuMyAwLjEyMiAwLjUgMC4xNzIgMC42IDAuMTc0IDAuNS0wLjE1NyAwLjUtMC4yNzggMC0wLjI4IDAtMC40NjUtMC4zLTAuMzMyLTAuNC0wLjIyNS0wLjQtMS4xNzEtMC40aC0wLjg5NWMtMC4wNzUgMC4xLTAuNjU0IDEuMS0wLjY1NCAxLjJzMC42NTkgMC43IDAuNzgzIDAuN2MwLjA1OSAwIDAuMjY5LTAuMSAwLjQ2Ny0wLjJsMC4zNTktMC4yIDAuMiAwLjEgMC4yIDAuMS0wLjAzOSAwLjNjLTAuMDIxIDAuMi0wLjAzOSAwLjQtMC4wNDEgMC41bC0wLjAwMiAwLjJoMC4yNTFjMC4xMzggMCAwLjI3MiAwIDAuMjk4IDAuMSAwLjAyNiAwIDAuMDczIDAuMiAwLjEwNiAwLjQgMC4wOTQgMC42IDAuMDIzIDAuNSAwLjcwMiAwLjVoMC41OTRsMC41NTUtMC4yIDAuNTU1LTAuMyAwLjM5NiAwLjJjMC4zNjIgMC4xIDAuNDYyIDAuMSAxLjEzOCAwLjJoMC43OWMwLjAyNiAwLjEgMC4wNjkgMC4zIDAuMDk0IDAuNSAwLjAyOSAwLjMgMC4wNzMgMC41IDAuMTE0IDAuNWgwLjYxMWMwLjMwMSAwIDAuNTU4IDAuMSAwLjU3MiAwLjEgMC4wMTUgMCAwLjA1MyAwLjIgMC4wODUgMC41IDAuMDMzIDAuMyAwLjA4OCAwLjUgMC4xMjYgMC41IDAuMDQ3IDAuMSAwLjE4OCAwLjEgMC40NDUgMC4xaDAuMzc2bDEuMDg0IDAuN2MwLjU5NiAwLjQgMS4wODMgMC44IDEuMDgzIDAuOHMtMC4xNDIgMC4yLTAuMzE3IDAuNGMtMC4xNzQgMC4yLTAuMzE3IDAuNC0wLjMxOCAwLjRzLTAuMDQyIDAuNC0wLjA4OSAwLjhsLTAuMDg3IDAuNi0wLjI0NiAwLjNjLTAuMzE3IDAuMy00LjU0OSA0LjgtNC42NjMgNS0wLjA3OSAwLjEtMC4wOCAwLjEtMC4wMTIgMC4zIDAuMDQxIDAuMSAwLjA3NCAwLjMgMC4wNzQgMC41djAuM2wtMC4zMTcgMC40Yy0wLjE3NCAwLjEtMC4zMTcgMC4zLTAuMzE3IDAuM3MwLjEwOSAwLjIgMC4yNDMgMC4zYzAuMTM0IDAuMiAwLjI0NCAwLjQgMC4yNDQgMC40IDAuMDAxIDAuMS0wLjM3OCAwLjYtMC40NDEgMC42LTAuMDIzIDAtMC4zMjgtMC40LTAuNjc4LTAuOHptNDQuOTktMS4yYy0wLjA3LTAuMS0wLjExLTAuMi0wLjE2LTAuNC0wLjEtMC41LTAuMTItMC40IDAuNjYtMS4zIDAuMzgtMC40IDAuNy0wLjggMC43LTAuOCAwLTAuMS0wLjEyLTAuMy0wLjI3LTAuNS0wLjE0LTAuMi0wLjI2LTAuNC0wLjI2LTAuNCAwLTAuMSAwLjI5LTAuNSAwLjM0LTAuNSAwLjAzIDAuMSAwLjE2IDAuMiAwLjMgMC40bDAuMjQgMC40IDAuMDcgMC43YzAuMTEgMSAwLjE1IDAuOS0wLjUyIDEuN2wtMC41OSAwLjdoLTAuMi0wLjMxem0tNC42MS0yLjJjLTAuMTggMC0wLjMzIDAtMC40NC0wLjEtMC4wOS0wLjEtMC41Ny0wLjUtMS4wNy0wLjgtMC41MS0wLjQtMC45NC0wLjctMC45Ny0wLjdzLTAuMDUgMC4xLTAuMDUgMC4yYzAgMC0wLjAzIDAuMS0wLjA2IDAuMS0wLjA5IDAuMS0yLjU5IDAuNi0yLjY0IDAuNi0wLjAyIDAgMC4wMi0wLjMgMC4wOS0wLjUgMC4wNy0wLjMgMC4xMi0wLjUgMC4xMi0wLjUgMC0wLjEtMC4xMS0wLjItMC4yNS0wLjJsLTAuMjYtMC4yLTAuMDEtMC42LTAuMDItMC43IDAuMTQtMC4xYzAuMjgtMC4yIDMuMzktMi4yIDMuNDMtMi4yIDAuMDEgMCAwLjM3IDAuMiAwLjc4IDAuNCAwLjQyIDAuMyAwLjc4IDAuNSAwLjgxIDAuNSAwLjA0IDAgMC4wNy0wLjEgMC4wOS0wLjMgMC4wMi0wLjMgMC4wNi0wLjQgMC4wOS0wLjVoMC4yNiAwLjIybDAuOTkgMS41YzAuNTUgMC44IDEgMS41IDEgMS42IDAgMC0xLjIxIDIuNC0xLjMzIDIuNS0wLjA1IDAuMS0wLjQyIDAuMS0wLjkyIDB6bS0yMi43ODMtMWMtMC4zOTQtMC4xLTAuNzM3LTAuMS0wLjc2MS0wLjEtMC4wMjQtMC4xLTAuMzQ2LTAuOS0wLjcxNi0xLjlsLTAuNjcyLTEuOSAwLjIwMi0wLjMgMC4yMDEtMC4ydi0wLjUtMC42bC0wLjIyNy0wLjJjLTAuMTI0LTAuMi0wLjM4MS0wLjUtMC41NzEtMC43bC0wLjM0NC0wLjQgMC4yMTgtMC4yYzAuMTE5LTAuMSAwLjIwNi0wLjIgMC4xOTMtMC4yLTAuMDE0IDAtMC4yNTUtMC4yLTAuNTM3LTAuM2wtMC41MTItMC40aC0xLjE4Yy0xLjE2OS0wLjEtMS4xODEtMC4xLTEuMzE3LTAuMi0wLjA3NS0wLjEtMC4zNTctMC4zLTAuNjI1LTAuNi0wLjI2OC0wLjItMC41MDItMC40LTAuNTE5LTAuNC0wLjAxOC0wLjEtMC4wNDgtMC43LTAuMDY4LTEuNGwtMC4wMzUtMS4yIDEuNDg1LTEuMyAxLjQ4Ni0xLjIgMC44MjEtMC4xIDAuODItMC4xIDAuMiAwLjJjMC4xODMgMC4yIDAuMiAwLjIgMC4yIDAuNHYwLjNsMC41ODYgMC4yYzAuMzIyIDAuMSAwLjYxMSAwLjIgMC42NDIgMC4yczAuMTg1LTAuMSAwLjM0MS0wLjNjMC4xNTctMC4xIDAuMzE0LTAuMiAwLjM1LTAuMnMwLjE2NCAwLjEgMC4yODYgMC4ybDAuMjIyIDAuMSAwLjg4IDAuMWgwLjg4MWwwLjE4Ny0wLjIgMC4xODYtMC4xdi0wLjRjMC0wLjMtMC4wMTctMC40LTAuMDYxLTAuNC0wLjAzMyAwLTAuMTkgMC4xLTAuMzQ3IDAuMy0wLjE1OCAwLjMtMC4zMTIgMC40LTAuMzQyIDAuNHMtMC4yMy0wLjItMC40NDUtMC41Yy0wLjQwMy0wLjYtMC41NDktMC43LTAuNDk1LTAuNCAwLjAxNiAwLjEgMC4wNDQgMC4zIDAuMDYzIDAuNSAwLjAyNyAwLjQgMC4wMjIgMC40LTAuMDM2IDAuNC0wLjAzOCAwLTAuMjM3LTAuMi0wLjQ0My0wLjMtMC4yNzYtMC4yLTAuMzgxLTAuMy0wLjQtMC40LTAuMDE0LTAuMS0wLjA1MS0wLjMtMC4wODItMC41LTAuMDU0LTAuMy0wLjA3MS0wLjQtMC40MTEtMC44LTAuNzAxLTAuOC0wLjczNS0wLjgtMC44MjQtMC44LTAuMDQzIDAuMS0wLjA3OSAwLjEtMC4wNzkgMC4yIDAgMCAwLjE4NiAwLjMgMC40MTMgMC42IDAuMzY0IDAuNSAwLjQwNyAwLjYgMC4zNTggMC43LTAuMDk5IDAuMi0wLjQ0OCAwLjYtMC40ODYgMC42LTAuMDQgMC0wLjA5OS0wLjEtMC4xOTEtMC42LTAuMDU5LTAuMy0wLjE0Ny0wLjMtMC43OS0wLjhsLTAuMjc3LTAuMi0wLjI3NSAwLjNjLTAuMjYyIDAuMi0wLjI4MSAwLjItMC40MzEgMC4xaC0wLjIwOWMtMC4wMjggMC0wLjQ0MSAwLjMtMC45MTYgMC44LTAuNDc2IDAuNC0wLjg5NCAwLjgtMC45MyAwLjgtMC4wNjMgMC0wLjA5My0wLjEtMC40NjYtMS4xLTAuMjUxLTAuNy0wLjI1LTAuNyAwLjA0MS0wLjZoMC42MiAwLjM4OWwwLjExMS0wLjJjMC4xNTMtMC4zIDAuMTQxLTAuMy0wLjA4Ni0wLjYtMC4xMS0wLjEtMC4xOS0wLjItMC4xOC0wLjMgMC4wMSAwIDAuMTg3LTAuMiAwLjM5Mi0wLjMgMC4zMDgtMC4zIDAuNDE3LTAuMyAwLjYxNy0wLjMgMC4yMTctMC4xIDAuMjkyLTAuMSAwLjY4NC0wLjUgMC4yNDMtMC4yIDAuNDQxLTAuNCAwLjQ0MS0wLjUgMCAwLTAuMDQ0LTAuMS0wLjA5OC0wLjMtMC4wNTMtMC4xLTAuMDk3LTAuMi0wLjA5Ny0wLjIgMC0wLjEgMC4zNTItMC4zIDAuNDM1LTAuMyAwLjAyNyAwIDAuMTIyIDAuMSAwLjIxIDAuMmwwLjE2IDAuMyAwLjc4LTAuMWgwLjgzYzAuMDI2LTAuMSAwLjA3MS0wLjIgMC4wOTktMC4zbDAuMDUxLTAuMiAwLjg0OC0wLjNjMC40NjYtMC4yIDAuODU1LTAuNCAwLjg2NS0wLjRzLTAuMDQ2LTAuMS0wLjEyNC0wLjJsLTAuMTQyLTAuMS0wLjUxOSAwLjFjLTAuMjg2IDAuMS0wLjU1IDAuMi0wLjU4NyAwLjItMC4wNjktMC4xLTAuMzIxLTAuNi0wLjMyMS0wLjcgMCAwIDAuMTY1LTAuMiAwLjM2Ni0wLjMgMC4yMDEtMC4yIDAuMzY2LTAuMyAwLjM2Ni0wLjQgMCAwLTAuMzgtMC40LTAuNDU1LTAuNC0wLjA2NiAwLjEtMS4wMDggMS4zLTEuMDA4IDEuM3MwLjA3OSAwLjEgMC4xNzYgMC4ybDAuMTc2IDAuMi0wLjA0MiAwLjQtMC4wNDIgMC40LTAuNDA2IDAuMWMtMC42MzMgMC4yLTAuNjQ2IDAuMi0wLjc2OC0wLjEtMC4wNTgtMC4xLTAuMTI2LTAuMi0wLjE1MS0wLjMtMC4wMjkgMC0wLjIzNSAwLTAuNTU1IDAuMWgtMC41NDFjLTAuMDQxLTAuMSAwLjAzMS0wLjkgMC4wODMtMSAwLjA5NC0wLjIgMS43MDQtMi4zIDEuNzk2LTIuNCAwLjA3Ni0wLjEgMC4zNTMtMC4yIDEuMDU0LTAuMyAwLjUyMy0wLjIgMS4wMDMtMC4zIDEuMDY2LTAuM3MwLjc3MiAwLjIgMS41NzUgMC40YzAuODA0IDAuMiAxLjQ3MSAwLjMgMS40ODMgMC4zIDAuMTAxIDAtMC40MjEgMC44LTAuNTI4IDAuOC0wLjA4NCAwLjEtMC4wNjIgMC4xLTAuNTg0IDBoLTAuNDc1YzAgMC4xIDAuMTUxIDAuMyAwLjMzNyAwLjRsMC4zMzcgMC40IDAuMTg3LTAuMWMwLjEwMy0wLjEgMC42MzItMC40IDEuMTc1LTAuOGwwLjk4Ny0wLjYgMC43NDEtMC4xaDAuNzU4YzAuMDEtMC4xLTAuMTkxLTAuMy0wLjQ0Ni0wLjYtMC4yNTYtMC4zLTAuNDY1LTAuNi0wLjQ2NS0wLjYgMC4wMDEgMCAwLjI2OS0wLjMgMC41OTctMC42bDAuNTk3LTAuNyAwLjg0OC0wLjNjMC44MTQtMC40IDAuODUxLTAuNCAwLjkxNi0wLjMgMC4wODYgMC4xIDAuMTg3IDAuNSAwLjE0OCAwLjUtMC4wMTYgMC0wLjMzOCAwLjEtMC43MTYgMC4zLTAuMzc4IDAuMS0wLjczOSAwLjItMC44MDIgMC4zLTAuMTIxIDAtMC45MDcgMC45LTAuOTA3IDAuOSAwIDAuMSAwLjE2MSAwLjIgMC45NjkgMC43IDAuMzg1IDAuMiAwLjcxNCAwLjQgMC43MzEgMC40cy0wLjAxOS0wLjEtMC4wNzktMC4yYy0wLjA1OS0wLjEtMC4xMDgtMC4yLTAuMTA4LTAuMiAwLTAuMSAxLjAxNC0xIDEuMTA1LTEgMC4wMzEgMCAwLjUwMyAwLjEgMS4wNDggMC4yIDAuNjA3IDAuMSAxLjAxMSAwLjIgMS4wMzkgMC4yIDAuMDI1IDAgMC4xMTMtMC4yIDAuMTk1LTAuM2wwLjE0OS0wLjMgMS44NDctMC43IDEuODQ2LTAuNyAwLjgxMyAwLjJjMC40NSAwLjEgMSAwLjIgMS4yNCAwLjIgMC4yMyAwLjEgMC40MiAwLjEgMC40MiAwLjIgMCAwLTAuMzcgMC4yLTAuODMgMC41LTAuNDggMC4zLTAuODEgMC41LTAuNzkgMC41czEuMjMgMC4yIDIuNjggMC4zYzEuNDQgMC4yIDIuNzEgMC4zIDIuODIgMC4zIDAuMTggMCAwLjIgMCAwLjY2LTAuNCAwLjI2LTAuMyAwLjQ5LTAuNSAwLjUyLTAuNXMwLjE0IDAuMiAwLjI2IDAuNGMwLjExIDAuMiAwLjIzIDAuNCAwLjI2IDAuNHMwLjY3IDAuMSAxLjQyIDAuMmwxLjM2IDAuMSAwLjM4IDAuMmMwLjQ1IDAuMiAwLjQ2IDAuMiAxLjU4IDAuMSAwLjQ2LTAuMSAwLjktMC4xIDAuOTktMC4xaDAuMTZ2MS41YzAgMC44LTAuMDIgMS41LTAuMDQgMS42LTAuMDIgMC0wLjUxIDAtMS4wOCAwLjEtMC41OCAwLTEuMDggMC4xLTEuMTEgMC4xLTAuMDQgMC4xLTAuMDUgMC4yLTAuMDMgMC41bDAuMDIgMC40LTAuNjQgMC44Yy0wLjM1IDAuNS0wLjY2IDAuOS0wLjY4IDAuOS0wLjAzIDAtMC4wNi0wLjEtMC4wNy0wLjEtMC4wNC0wLjItMC4yMy0xLjQtMC4yMy0xLjUgMCAwIDAuMTUtMC4yIDAuMzItMC40IDAuMTgtMC4zIDAuMzItMC41IDAuMzItMC41IDAtMC4xIDAuMDEtMC4xLTEuMzYgMC4xbC0xLjE4IDAuMS0wLjc1IDAuNGMtMC40MSAwLjItMC43NyAwLjQtMC44IDAuNC0wLjA3IDAuMS0wLjE2IDAuNi0wLjEyIDAuNiAwLjAyIDAgMC4yNCAwIDAuNDgtMC4xIDAuMjUgMCAwLjQ3LTAuMSAwLjUtMC4xIDAuMDMgMC4xIDAuMDcgMC40IDAuMDggMC44bDAuMDQgMC43LTAuMTIgMC4xaC0wLjI3Yy0wLjMxIDAtMC4zOCAwLjEtMC40NyAwLjQtMC4wNSAwLjItMC4xMiAwLjQtMC4xNiAwLjRzLTAuMzggMC4zLTAuNzUgMC41Yy0wLjM4IDAuMy0wLjY4IDAuNS0wLjY4IDAuNSAwIDAuMSAwLjA0IDAuMiAwLjEgMC4zIDAuMDcgMC4yIDAuMDggMC4zIDAuMDQgMC40LTAuMDkgMC4xLTAuODIgMC41LTAuODggMC41LTAuMDMgMC0wLjEyLTAuMi0wLjE5LTAuNS0wLjA4LTAuMi0wLjE2LTAuNC0wLjE4LTAuNS0wLjA2IDAtMC41OCAwLjItMC42MiAwLjMtMC4wMSAwLjEgMC4wMSAwLjYgMC4wNSAxLjIgMC4wNyAwLjkgMC4wNyAxLjEgMC4wMSAxLjEtMC4wMyAwLjEtMC42NSAwLjQtMS4zNyAwLjgtMC43MiAwLjUtMS4zIDAuOC0xLjMgMC45IDAgMCAwLjE0IDAuMiAwLjMyIDAuNXMwLjMxIDAuNSAwLjI5IDAuNWMtMC4wNCAwLjEtMS4wNzYgMC43LTEuMTQ1IDAuNy0wLjAyOSAwLTAuMTUyLTAuMi0wLjI3NC0wLjQtMC4xNjgtMC40LTAuMjQzLTAuNS0wLjMxOS0wLjUtMC4xNTUgMC0wLjE2MiAwLjEtMC4wNCAwLjZsMC4xMTMgMC41IDAuNDQgMC4zYzAuMjQzIDAuMiAwLjQ1OSAwLjMgMC40ODIgMC4zIDAuMDU3IDAuMS0wLjAzOCAwLjMtMC4xOCAwLjMtMC4xMDQgMC4xLTAuMTQzIDAuMS0wLjM1MSAwLjEtMC4zMjQtMC4xLTAuMzMyLTAuMS0wLjI5OCAwLjFzMC4xMzggMC4zIDAuMzM3IDAuM2MwLjI0NCAwIDAuMzE0IDAgMC40NzcgMC41IDAuMDg3IDAuMiAwLjE4OCAwLjUgMC4yMTggMC41IDAuMDQgMCAwLjM3IDAuMiAwLjc0IDAuMyAwLjQ1IDAuMiAwLjY4IDAuMyAwLjcgMC40IDAuMDUgMC4xIDAuMDYgMC40IDAuMDEgMC40LTAuMDIgMC0wLjM5LTAuMS0wLjgyLTAuMnMtMC43OS0wLjEtMC44MDYtMC4xYy0wLjA1MyAwLTIuMzM3LTIuNi0yLjMzNy0yLjYgMC0wLjEgMC4xMTUtMC4xIDAuNDE1IDAgMC4zMjIgMCAwLjQxNSAwIDAuNDE1LTAuMSAwIDAtMC4zMDItMC43LTAuNjctMS41bC0wLjY2OS0xLjQtMC4wMTgtMC40Yy0wLjAxNi0wLjQtMC4wMzItMC41LTAuMTEyLTAuNS0wLjIwMy0wLjEtMC4yNzcgMC0wLjM2NiAwLjRsLTAuMDg2IDAuNC0wLjYxIDAuNGMtMC4zMzYgMC4zLTAuNjQ0IDAuNS0wLjY4NiAwLjYtMC4wNTcgMC0wLjA4MiAwLjItMC4xMDEgMC41bC0wLjAyNCAwLjUtMC40MzkgMC4yYy0wLjI0MSAwLTAuNDgxIDAuMS0wLjUzMyAwLjEtMC4wNzEgMC0wLjE0My0wLjItMC4zMDYtMC42LTAuNDc2LTEuMy0wLjQzNy0xLjItMC42NjQtMS4zbC0wLjIwNC0wLjF2LTAuNWMwLTAuNC0wLjAyLTAuNi0wLjA0OS0wLjYtMC4yMDYtMC4xLTMuNzYtMC43LTMuNzg3LTAuNy0wLjAzMSAwLjEgMC40MTcgMC45IDAuNTI4IDEgMC4wMjQgMCAwLjE4NSAwIDAuMzcxLTAuMWwwLjMyOC0wLjEgMC4zNDEgMC40YzAuMTg4IDAuMSAwLjM0MSAwLjMgMC4zNDEgMC40IDAgMC0wLjYyIDAuOC0wLjc0OSAwLjktMC4wNTggMC0wLjQ0NCAwLjItMC44NTggMC4zLTAuNDk5IDAuMi0wLjc3NyAwLjMtMC44MjIgMC4yLTAuMDM3IDAtMC40NDUtMC43LTAuOTA3LTEuNi0wLjQ2MS0wLjktMC44NjgtMS43LTAuOTA0LTEuNy0wLjA3MS0wLjEtMC4zMjctMC4xLTAuNDQxIDAtMC4wNDggMC0wLjA3OCAwLjEtMC4wOTEgMC4zbC0wLjAxOSAwLjQgMC41OTEgMS4yYzAuNTgxIDEuMSAwLjU5NiAxLjEgMC44ODggMS40IDAuNDY5IDAuMyAwLjY4OCAwLjUgMC43NzEgMC40aDAuNjU4IDAuNTUxYy0wLjAxNiAwLjEtMC41NjggMC45LTEuMjI3IDEuOC0wLjY1OCAxLTEuMTk3IDEuOC0xLjE5NyAxLjggMCAwLjEgMC4wNTUgMC4yIDAuMTIzIDAuMyAwLjEwMiAwLjEgMC4xMyAwLjIgMC4xNjkgMC42IDAuMDc5IDAuOCAwLjExOCAwLjctMC42MDMgMS4yLTAuMDcxIDAuMS0wLjEgMC4yLTAuMTMzIDAuNi0wLjAyMyAwLjItMC4wNiAwLjQtMC4wODMgMC41LTAuMjk1IDAuNC0xLjg5MSAyLjMtMS45NTIgMi4zaC0wLjh6bTUuOTk4LTE0LjJjMC4xMjcgMCAwLjIwOC0wLjEgMC4yMDgtMC4xIDAtMC4xLTAuMDg1LTAuMy0wLjE4OS0wLjUtMC4yODUtMC41LTAuMjg0LTAuNS0wLjA1OC0wLjggMC4yMjQtMC4zIDAuMjI4LTAuMyAwLjExNy0wLjUtMC4xMTQtMC4xLTAuMTctMC4xLTAuMzg5IDAuMWwtMC4xOTMgMC4yIDAuMDQ0IDAuOGMwLjA0MyAwLjggMC4wNzggMC45IDAuMTk2IDAuOSAwLjAzMSAwIDAuMTUtMC4xIDAuMjY0LTAuMXptLTQuNTE5LTEuMWMwLjM0NC0wLjMgMC4zMjQtMC4zIDEuNDEtMC4yIDAuMzg5IDAuMSAwLjcyNSAwLjEgMC43NDcgMC4xcy0wLjA3Ny0wLjItMC4yMi0wLjVjLTAuMjY5LTAuNC0wLjM3OS0wLjUtMC42ODEtMC41LTAuMTI5IDAtMC4xMzkgMC0wLjEzOSAwLjJzLTAuMDUgMC4yLTAuMzA5IDAuMmMtMC4xMjUgMC0wLjE5NyAwLTAuMzc4LTAuMmwtMC4yMjQtMC4zLTAuMzQ5IDAuNWMtMC4xOTMgMC4yLTAuMzUgMC40LTAuMzUgMC41IDAuMDAxIDAuMSAwLjEwMiAwLjQgMC4xNDkgMC40IDAuMDI1IDAgMC4xOC0wLjEgMC4zNDQtMC4yem02LjIyNi0wLjFjMC4wMjYgMCAwLjAzNS0wLjIgMC4wMTgtMC4zbC0wLjAzLTAuMmgtMC4xOTRjLTAuMjIzIDAtMC4yNDkgMC0wLjE5NyAwLjQgMC4wMyAwLjIgMC4wNCAwLjIgMC4xOTMgMC4yIDAuMDg5IDAgMC4xODQtMC4xIDAuMjEtMC4xem0tMzYuNjU4IDEzLjdjLTAuMTY4LTAuMS0wLjMwNS0wLjItMC4zMDUtMC4zIDAgMCAwLjE5NC0wLjIgMC4zMzgtMC4zbDAuMTM4LTAuMSAwLjMgMC4xYzAuMTY1IDAuMiAwLjMxNCAwLjMgMC4zMyAwLjMgMC4wMzQgMC4xLTAuMzA0IDAuNS0wLjQyMSAwLjUtMC4wNDEgMC0wLjIxMi0wLjEtMC4zOC0wLjJ6bTMzLjE5Ni0wLjVjLTAuMjYxLTAuMi0wLjQ4NC0wLjQtMC40OTYtMC40LTAuMDIyLTAuMSAwLjIxOC0xIDAuMjg2LTEuMSAwLjA1NS0wLjEgMS4wMDUtMC44IDEuMDYzLTAuOCAwLjEwOCAwIDAuMzc4IDAuMiAwLjM3OCAwLjNzLTAuNjM1IDIuMi0wLjY5OSAyLjJjLTAuMDQ0IDAuMS0wLjE3IDAtMC41MzItMC4yem0tMzQuNTc0LTAuNGMtMC4xNzQtMC4xLTAuMzE0LTAuMy0wLjMxMS0wLjMgMC4wMDgtMC4xIDAuNDU1LTAuNyAwLjUxLTAuNyAwLjA2MyAwIDAuNzMxIDAuOSAwLjcwNCAwLjktMC4wNCAwLjEtMC40NTEgMC4zLTAuNTIxIDAuMy0wLjAzNiAwLTAuMjA4LTAuMS0wLjM4Mi0wLjJ6bTUyLjY0NC0yLjdjLTAuODQtMC4yLTEuNTUtMC40LTEuNTctMC40LTAuMDUtMC4xLTAuMTQtMS4xLTAuMS0xLjEgMC4wNC0wLjEgMy4xIDAuNyAzLjE4IDAuNyAwLjA1IDAuMSAwLjI5IDAuOSAwLjI5IDEgMCAwLjItMC4wOSAwLjEtMS44LTAuMnptLTMuNjEtMC43Yy0wLjA2IDAtMC4xMS0wLjEtMC4xMS0wLjFzMC41LTEuMSAwLjU0LTEuMWMwLjA1LTAuMSAwLjU2IDAgMC42MSAwLjEgMC4wMiAwLTAuMTEgMC4zLTAuMjggMC42LTAuMyAwLjUtMC4zIDAuNS0wLjQ3IDAuNWgtMC4yOXptLTEuNTMtMC4yYy0wLjI2LTAuMS0wLjQ4LTAuMS0wLjQ5LTAuMi0wLjAxIDAgMC0wLjIgMC4wMi0wLjVsMC4wNC0wLjUgMC41LTAuNWMwLjI3LTAuMiAwLjUzLTAuNCAwLjU2LTAuNCAwLjA3IDAgMC43NCAwLjkgMC43NCAxIDAgMC0wLjE0IDAuMy0wLjMxIDAuNi0wLjM2IDAuNy0wLjMzIDAuNy0xLjA2IDAuNXptLTM0LjE1NS00LTAuOTY5LTAuMyAwLjAyOC0wLjJjMC4wMTUtMC4xIDAuMDQ4LTAuMiAwLjA3Mi0wLjIgMC4wMjcgMCAwLjQxNiAwLjEgMC45OSAwLjQgMC41MiAwLjIgMS4wMTkgMC40IDEuMTEgMC40IDAuMTQyIDAuMSAwLjE1NiAwLjEgMC4wOTcgMC4yLTAuMTU0IDAuMS0wLjM0MyAwLjEtMS4zMjgtMC4zem0tMTYuNjg3LTAuM2MtMC4yODUtMC4yLTAuNTQzLTAuMy0wLjU3My0wLjNzLTAuMTkzIDAtMC4zNjEgMC4xYy0wLjE2NyAwLjEtMC4zNDEgMC4yLTAuMzg0IDAuMi0wLjEwOSAwLTEuNzM0LTEtMS43NjYtMS0wLjAyOS0wLjEgMC4wNjYtMC40IDAuMTI2LTAuNSAwLjAyMSAwIDAuNDc0IDAuMiAxLjAwNyAwLjQgMC41MzIgMC4yIDAuOTk3IDAuNCAxLjAzMiAwLjRzMC4yMTctMC4xIDAuNDAzLTAuMmMwLjE4Ny0wLjEgMC4zNjktMC4yIDAuNDA0LTAuMiAwLjA5NSAwIDAuOTYyIDAuOSAwLjk2MiAwLjkgMCAwLjEtMC4yMzMgMC41LTAuMjkgMC41LTAuMDIzIDAtMC4yNzUtMC4xLTAuNTYtMC4zem0xNC40NjItMC4zYy0wLjMwNy0wLjEtMC41NzYtMC4yLTAuNTk4LTAuMi0wLjA0NiAwIDAuMDQ2LTAuNSAwLjEwNy0wLjUgMC4wNDYtMC4xIDEuMTc1IDAuMyAxLjIzOCAwLjMgMC4wNSAwLjEtMC4wNDYgMC40LTAuMTMgMC40LTAuMDM2IDAuMS0wLjI2NCAwLjEtMC42MTcgMHptNDEuNjMtMS4zYy0wLjEyLTAuNC0wLjIxLTAuOC0wLjE5LTAuOGgwLjE2YzAuMDkgMCAwLjIyIDAuMiAwLjQ4IDAuNiAwLjE5IDAuMiAwLjM1IDAuNSAwLjM1IDAuNSAwLjAxIDAtMC40NiAwLjQtMC41MiAwLjQtMC4wMyAwLTAuMTUtMC4zLTAuMjgtMC43em0tNDAuNzY2IDAuNGMtMC4yMjMtMC4yLTAuMjMyLTAuMi0wLjIzMi0wLjQgMC0wLjEgMC4wMTktMC4yIDAuMDQzLTAuMiAwLjA0IDAgMC40MTMgMC40IDAuNDc0IDAuNiAwLjA0IDAuMS0wLjAxIDAuMS0wLjI4NSAwem0tMTkuOTc2LTAuNGMtMC4wNjItMC4xLTAuNDAyLTAuOC0wLjQwMi0wLjlzMC4xMyAwIDAuNzA2IDAuMmMwLjMxMSAwLjEgMC41NTggMC4yIDAuNTQ5IDAuMi0wLjAxNiAwLjEtMC43MDcgMC41LTAuNzc0IDAuNWgtMC4wNzl6bTU4Ljc5Mi0xYy0wLjEyLTAuMi0wLjIyLTAuMy0wLjIxLTAuMyAwLjAxLTAuMSAwLjM3LTAuMyAwLjc5LTAuNSAwLjQzLTAuMyAwLjgtMC41IDAuODMtMC41IDAuMDQgMCAwLjE4LTAuNCAwLjMyLTAuOHMwLjI4LTAuOCAwLjMxLTAuOGMwLjA1IDAgMC4xNiAwIDAuNSAwLjIgMC4yNCAwLjIgMC40NCAwLjMgMC40NSAwLjMgMC4wMiAwLjEtMC44NSAxLjUtMS4wMSAxLjctMC4wNiAwLjEtMS42NSAwLjktMS43MyAwLjktMC4wMSAwLTAuMTItMC4xLTAuMjUtMC4yem0tMjIuMzk3LTEuMmMtMC4wNTcgMC0wLjExOC0wLjEtMC4xMzUtMC4xLTAuMDMzIDAgMC4xNjUtMC40IDAuMjI5LTAuNCAwLjA0NCAwIDAuMTA2IDAuMiAwLjE1NSAwLjQgMC4wMjkgMC4xIDAuMDIxIDAuMS0wLjA1NSAwLjFoLTAuMTk0em0yNS43NTctMS45Yy0wLjExLTAuMS0wLjEyLTAuMi0wLjA2LTAuMiAwLjA4LTAuMSAxLjA0LTAuNSAxLjEyLTAuNXMwLjQzIDAuMyAwLjQzIDAuM2MwIDAuMS0xLjE3IDAuNi0xLjMgMC42LTAuMDMgMC0wLjEyLTAuMS0wLjE5LTAuMnptLTMwLjA2LTEuNGMtMC4xMzgtMC4xLTAuMjUtMC4zLTAuMjUtMC4zIDAtMC4xIDAuMzg4LTAuNyAwLjQ1My0wLjcgMC4wMzIgMCAwLjE3MyAwLjEgMC4zMTIgMC4zIDAuMTgzIDAuMiAwLjI0MSAwLjMgMC4yMTEgMC40LTAuMDY3IDAuMS0wLjM5NSAwLjUtMC40MzcgMC41LTAuMDIxIDAtMC4xNTEtMC4xLTAuMjg5LTAuMnptMS4wODYgMGMtMC4wMTQgMCAwLjAzLTAuMiAwLjA5OS0wLjMgMC4xNTktMC4zIDAuMTU4LTAuNC0wLjAyNS0wLjUtMC4wODMtMC4xLTAuMjQtMC4zLTAuMzQ5LTAuNGwtMC4xOTgtMC4yIDAuMjYtMC4zYzAuMTgtMC4yIDAuMjc4LTAuMyAwLjMxNy0wLjIgMC4wMzEgMCAwLjExNiAwLjIgMC4xOSAwLjQgMC4xMjEgMC4zIDAuMTcyIDAuMyAwLjUwMSAwLjZsMC4zNjYgMC4zLTAuMDM0IDAuM2MtMC4wMTkgMC4yLTAuMDYgMC4zLTAuMDkgMC4zLTAuMDMxIDAuMS0wLjI3MSAwLjEtMC41MzMgMC4xLTAuMzY1IDAtMC40ODQgMC0wLjUwNC0wLjF6bS0zNC44MTYtMi41Yy0wLjA1MiAwLTAuMDM5LTMgMC4wMTMtMyAwLjAyNiAwIDAuNzc4IDAuMyAxLjY3MSAwLjZsMS42MjUgMC43IDAuMTggMC4yYzAuMDk5IDAuMiAwLjE4MiAwLjMgMC4xODMgMC40aC0xLjIyOWMtMS4xNzYgMC0xLjI0MiAwLTEuNDYzIDAuMS0wLjEyOCAwLTAuMjMyIDAuMS0wLjIzMiAwLjFzMC4xMTMgMC4yIDAuMjUxIDAuM2MwLjEzOSAwLjEgMC4yMzkgMC4zIDAuMjI1IDAuM3MtMC4yNjcgMC4xLTAuNTggMC4yYy0wLjYxMSAwLjItMC41OTggMC4yLTAuNjQ0IDAuMXptMjYuODEyIDBjLTAuMTQzIDAtMC4yMDQtMC4xLTAuNzM3LTAuOS0wLjMyLTAuNS0wLjU5Ni0xLTAuNjEyLTEtMC4wMTcgMC0wLjEzOS0wLjYtMC4yNzItMS4zLTAuMTMyLTAuNi0wLjI1Mi0xLjItMC4yNjYtMS4yLTAuMDU0LTAuMS0wLjk1LTAuOC0xLjAxNi0wLjgtMC4wMzggMC0wLjI2NCAwLjEtMC41MDIgMC4yLTAuMjM5IDAuMS0wLjQ2IDAuMS0wLjQ5MyAwLjEtMC4wNzUgMC0wLjU1Ni0wLjYtMC41NTYtMC43czEuNjgzLTIuMiAxLjc3NC0yLjJjMC4wNzUtMC4xIDcuMTctMC45IDcuMzItMC45IDAuMTM3IDAgMS44MDggMS4zIDEuODA4IDEuNHMtMC4xODYgMC4zLTAuNDE0IDAuNS0wLjQzIDAuMy0wLjQ0NyAwLjRjLTAuMDE4IDAtMC4wNjkgMC41LTAuMTEzIDFzLTAuMTAxIDEtMC4xMjYgMWMtMC4wMjUgMC4xLTAuMzY2IDAuNi0wLjc1NyAxLjItMC42NTUgMS4xLTAuNzI1IDEuMS0wLjg5IDEuMi0wLjA5OSAwLTAuNjMgMC4yLTEuMTggMC40bC0xIDAuMy0wLjI4OCAwLjctMC4yODggMC42aC0wLjM5NS0wLjU1em00Ljk0LTAuOGMtMC4yMzUtMC40LTAuMzk4LTAuNy0wLjM3NS0wLjcgMC4wNjUgMCAxLjUzLTAuNCAxLjU4OC0wLjQgMC4xMzggMC4xIDAuNjYxIDAuNiAwLjY2MSAwLjcgMCAwLTEuMjM0IDAuOS0xLjM4NSAxLTAuMDUxIDAtMC4xOTUtMC4yLTAuNDg5LTAuNnoiLz48ZyBmaWxsPSIjZTY3ZTIyIj48cGF0aCBkPSJtMjIgMTAzOC4yYzAgMC4yLTAuMTA0IDAuNC0wLjMxMiAwLjZsLTQuMzYzIDQuMiAxLjAzMyA2LjFjMC4wMDggMCAwLjAxMiAwLjEgMC4wMTIgMC4yIDAgMC4yLTAuMDQ0IDAuMy0wLjEzMiAwLjQtMC4wOCAwLjEtMC4yIDAuMi0wLjM2MSAwLjItMC4xNTIgMC0wLjMxMiAwLTAuNDgtMC4xbC01LjM5Ny0yLjktNS4zOTY2IDIuOWMtMC4xNzYzIDAuMS0wLjMzNjYgMC4xLTAuNDgwOCAwLjEtMC4xNjgzIDAtMC4yOTY1LTAuMS0wLjM4NDYtMC4yLTAuMDgwMi0wLjEtMC4xMjAyLTAuMi0wLjEyMDItMC40IDAgMCAwLjAwOC0wLjEgMC4wMjQtMC4ybDEuMDMzNy02LjEtNC4zNzUtNC4yYy0wLjIwMDMtMC4yLTAuMzAwNS0wLjQtMC4zMDA1LTAuNiAwLTAuMyAwLjIyNDQtMC41IDAuNjczMS0wLjVsNi4wMzM2LTAuOSAyLjcwNDMtNS41YzAuMTUyLTAuMyAwLjM0OS0wLjUgMC41ODktMC41czAuNDM3IDAuMiAwLjU4OSAwLjVsMi43MDQgNS41IDYuMDM0IDAuOWMwLjQ0OSAwIDAuNjczIDAuMiAwLjY3MyAwLjUiIGZpbGw9IiNlNjdlMjIiLz48L2c+PGcgZmlsbD0iI2YxYzQwZiI+PHBhdGggZD0ibTIyIDEwMzcuMmMwIDAuMi0wLjEwNCAwLjQtMC4zMTIgMC42bC00LjM2MyA0LjIgMS4wMzMgNi4xYzAuMDA4IDAgMC4wMTIgMC4xIDAuMDEyIDAuMiAwIDAuMi0wLjA0NCAwLjMtMC4xMzIgMC40LTAuMDggMC4xLTAuMiAwLjItMC4zNjEgMC4yLTAuMTUyIDAtMC4zMTIgMC0wLjQ4LTAuMWwtNS4zOTctMi45LTUuMzk2NiAyLjljLTAuMTc2MyAwLjEtMC4zMzY2IDAuMS0wLjQ4MDggMC4xLTAuMTY4MyAwLTAuMjk2NS0wLjEtMC4zODQ2LTAuMi0wLjA4MDItMC4xLTAuMTIwMi0wLjItMC4xMjAyLTAuNCAwIDAgMC4wMDgtMC4xIDAuMDI0LTAuMmwxLjAzMzctNi4xLTQuMzc1LTQuMmMtMC4yMDAzLTAuMi0wLjMwMDUtMC40LTAuMzAwNS0wLjYgMC0wLjMgMC4yMjQ0LTAuNSAwLjY3MzEtMC41bDYuMDMzNi0wLjkgMi43MDQzLTUuNWMwLjE1Mi0wLjMgMC4zNDktMC41IDAuNTg5LTAuNXMwLjQzNyAwLjIgMC41ODkgMC41bDIuNzA0IDUuNSA2LjAzNCAwLjljMC40NDkgMCAwLjY3MyAwLjIgMC42NzMgMC41IiBmaWxsPSIjZjFjNDBmIi8+PC9nPjwvZz48L3N2Zz4='

export default Star;