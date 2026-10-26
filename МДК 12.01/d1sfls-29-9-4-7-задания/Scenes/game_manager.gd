extends Node

@export var game_ui : GameUI
#@export var game_over_ui : GameOverUI
@export var coin_manager : CoinManager
@onready var player_node : Player = get_tree().get_first_node_in_group("Player")

func _ready() -> void:
	coin_manager.update_coin_UI.connect(_on_update_ui)
	var hcp = player_node.get_node("HealthComponent") as HealthComponent
	hcp.health_changed.connect(_on_player_health_changed)
	hcp.died.connect(_on_player_dead)

func _on_update_ui(value: int) -> void:
	game_ui._update_coins(value)

func _on_player_dead() -> void:
	#get_tree().paused = true
	#game_over_ui._show()
	get_tree().reload_current_scene()

func _on_player_health_changed(current_health: float, max_health: float):
	game_ui._update_live(current_health)
