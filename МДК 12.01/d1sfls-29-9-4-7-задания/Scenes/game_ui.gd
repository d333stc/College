extends Control
class_name GameUI

@onready var live_label = $LabelLiveCount
@onready var coin_label = $LabelAppleCount


func _update_coins(value: int) -> void:
	coin_label.text = str(value)

func _update_live(value: int) -> void:
	live_label.text = str(value)
