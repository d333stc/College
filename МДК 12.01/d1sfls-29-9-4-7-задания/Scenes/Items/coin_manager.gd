extends Node
class_name CoinManager

var collected_coins: int = 0
signal update_coin_UI(value : int)

func _ready() -> void:
	for coin in get_tree().get_nodes_in_group("Collectable"):
		coin.collected.connect(_on_coin_collected)

func _on_coin_collected(value):
	collected_coins += value
	emit_signal("update_coin_UI", collected_coins)
	print(collected_coins)
