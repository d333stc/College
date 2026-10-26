extends Sprite2D


var speed = 400 #Создание переменной для скорости
var angular_speed = PI #Создание переменной для вращения


func _process(delta) -> void: #Функция выполняющаяся каждый кадр
	rotation += angular_speed * delta #Увеличиваем вращение нашего спрайта на значение переменной

	var velocity = Vector2.UP.rotated(rotation) * speed #Переменная для самого поворота

	position += velocity * delta #Изменяем позицию спрайта для движения
