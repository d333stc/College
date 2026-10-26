extends Node
class_name HealthComponent

signal health_changed(current_health: float, max_health: float)
signal died

@export var max_health: float = 100.0
@export var damage_cooldown: float = 1.0

var current_health: float = 100.0

@onready var damageCooldownTimer = $DamageCooldownTimer
var is_alive: bool = true

func _ready():
	current_health = min(current_health, max_health)
	damageCooldownTimer.wait_time = damage_cooldown
	emit_health_changed()

func take_damage(damage: float) -> void:
	if !is_alive or !damageCooldownTimer.is_stopped():
		return
	current_health -= damage
	current_health = clamp(current_health, 0.0, max_health) 
	emit_health_changed()
	damageCooldownTimer.start()
	if get_parent().has_node("FXAnimPlayer"):
		var anim_player = get_parent().get_node("FXAnimPlayer")
		anim_player.play("damage_loop")
	if current_health <= 0.0:
		die()

func instant_kill() -> void:
	take_damage(max_health)

func heal(amount: float) -> void:
	if not is_alive:
		return 
	current_health += amount
	current_health = clamp(current_health, 0.0, max_health)
	emit_health_changed()

func die() -> void:
	if not is_alive:
		return 
	is_alive = false
	emit_signal("died")
	get_parent().queue_free()

func emit_health_changed() -> void:
	emit_signal("health_changed", current_health, max_health)

func _on_damage_cooldown_timer_timeout() -> void:
	if get_parent().has_node("FXAnimPlayer"):
		var anim_player = get_parent().get_node("FXAnimPlayer")
		anim_player.stop()
