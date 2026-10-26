extends Area2D

@export var value: int = 1

signal collected

func _on_body_entered(body):
	if body.is_in_group("Player"):
		emit_signal("collected", value)
		$AnimatedSprite2D.play("collected")
		$AnimatedSprite2D.animation_finished.connect(_delete_obj)


func _delete_obj():
	queue_free()
