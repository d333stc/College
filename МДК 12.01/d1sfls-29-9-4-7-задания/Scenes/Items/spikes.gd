extends Area2D

@export var damage: float = 20.0

func _on_body_entered(body: Node2D) -> void:
	if body.is_in_group("Player"):
		if body.has_node("HealthComponent"):
			var hc = body.get_node("HealthComponent") as HealthComponent
			hc.take_damage(damage)
