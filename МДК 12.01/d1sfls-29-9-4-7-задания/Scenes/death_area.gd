extends Area2D


func _on_body_entered(body: Node2D) -> void:
	if body.is_in_group("Player"):
		if body.has_node("HealthComponent"):
			var hc = body.get_node("HealthComponent") as HealthComponent
			hc.instant_kill()
