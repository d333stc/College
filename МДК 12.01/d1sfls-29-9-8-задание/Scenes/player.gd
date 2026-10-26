extends CharacterBody2D
class_name Player

@export_category("Moving Settings")
const ACCELERATION_SMOOTHING: int = 25
@export var MAX_SPEED: int = 100

func _physics_process(delta: float) -> void:
	var movement_vector = get_movement_vector()
	var direction = movement_vector.normalized()
	var target_vel = direction * MAX_SPEED
	velocity = velocity.lerp(target_vel, 1 - exp(-delta * ACCELERATION_SMOOTHING))
	look_at(get_global_mouse_position())
	move_and_slide()

func get_movement_vector() -> Vector2:
	var x_movement = Input.get_action_strength("move_right") - Input.get_action_strength("move_left")
	var y_movement = Input.get_action_strength("move_down") - Input.get_action_strength("move_up")
	return Vector2(x_movement, y_movement)
