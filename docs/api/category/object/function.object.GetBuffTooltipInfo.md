# object.GetBuffTooltipInfo
Возвращает информацию о бафе для отображения в тултипе.

## Описание
```lua
object.GetBuffTooltipInfo( id: ObjectId | BuffId ): table | nil
```
Функция возвращает усеченную версию информации о бафе, дополненную описанием, для использования в тултипах. В качестве аргумента принимается либо идентификатор экземпляра бафа, либо идентификатор ресурса (`BuffId`). Набор информации для ресурса является подмножеством набора информации для экземпляра.

## Список параметров
- **`id`** (`ObjectId` | `BuffId`) - Идентификатор экземпляра (должен быть валидным) или ресурса бафа.

## Возвращаемые значения
Возвращает `table` | `nil` - таблицу с информацией о бафе или `nil` в случае ошибки.

- **`name`** (`WString`) - имя бафа.

- **`texture`** (`TextureId`) - идентификатор текстуры для иконки бафа.

- **`description`** (`WString` | `ValuedText`) - описание бафа. Для ресурса бафа возвращается `WString` (описание из ресурса «как есть», может содержать форматные теги без подставленных значений). Для экземпляра бафа возвращается `ValuedText` (описание со всеми подставленными значениями).

- **`ownerId`** (`ObjectId` | `nil`) - идентификатор объекта, на котором висит баф, если такой объект существует (доступно только для экземпляра).

- **`isNeedVisualizeDuration`** (`boolean`) - флаг, указывающий на необходимость отображения длительности (доступно только для экземпляра).

- **`stackCount`** (`number`) - количество одинаковых бафов, уровень бафа или аналогичная информация (доступно только для экземпляра).

- **`durationMs`** (`number`) - полное время действия бафа в миллисекундах (доступно только для экземпляра).

- **`remainingMs`** (`number`) - время до окончания действия бафа в миллисекундах (доступно только для экземпляра).

## Примеры
### Получение информации о бафе для тултипа
```lua
templates[ TOOLTIP_BUFF ].GetDataFrom = function( self, params )
	local data
	local buffInfo, isResourceBuff

	if apitype( params.buffId ) == "BuffId" then
		buffInfo = object.GetBuffTooltipInfo( params.buffId )
		isResourceBuff = true
	else
		buffInfo = object.IsValidBuff( params.buffId ) and object.GetBuffTooltipInfo( params.buffId )
		params.cachedInfo = buffInfo
		isResourceBuff = false
	end

	local data = {}

	if not buffInfo then
		if params.cachedInfo then
			buffInfo = params.cachedInfo
			data.expired = true
		else
			return
		end
	end

	data.name = GetNameFromInfo( params, buffInfo )
	data.desc = GetDescFromInfo( params, buffInfo )

	if not isResourceBuff and not data.expired then
		data.buffId = params.buffId
		data.objectId = buffInfo.ownerId
		data.initTimeMs = common.GetAbsTimeMs()
		data.remainingMs = buffInfo.isNeedVisualizeDuration and buffInfo.remainingMs > 0 and buffInfo.remainingMs or nil
	end

	return data
end
--------------------------------------------------------------------------------
templates[ TOOLTIP_BUFF ].AssembleContentFrom = function ( self, data )
	local content = {
		{ type = TOOLTIP_CONTENT.SMART_LINE, data.name },
		{ type = TOOLTIP_CONTENT.SMART_LINE, data.desc },
		{ type = TOOLTIP_CONTENT.SMART_LINE, data.remainingMs and
			{
				format = GetAddonText( nil, "BuffDuration" ),
				style = "tip_blue",
				value = GetDurationComplexValuedText( data.remainingMs )
			} or nil,
			updaters = data.remainingMs and {
				{
					func = function( event )
						local elapsedMs = data.initTimeMs and event.timeMs - data.initTimeMs or event.elapsedMs
						data.initTimeMs = nil
						data.remainingMs = data.remainingMs - elapsedMs
						if data.remainingMs > 0 then
							return {
								format = GetAddonText( nil, "BuffDuration" ),
								value = GetDurationComplexValuedText( data.remainingMs ),
								style = "tip_blue"
							}
						else
							return {
								format = GetAddonText( nil, "BuffExpired" ),
								style = "tip_red"
							}
						end
					end,
					event = "EVENT_SECOND_TIMER"
				}
			}
		},
		{ type = TOOLTIP_CONTENT.SMART_LINE, data.expired and { format = GetAddonText( nil, "BuffExpired" ), style = "tip_red" } },
		updaters = data.objectId and {
			{
				func = DefaultUpdaterHandler,
				event = "EVENT_OBJECT_BUFF_CHANGED",
				filter = { objectId = data.objectId, buffId = data.buffId },
				flags = { cfilter = true }
			},
			{
				func = DefaultUpdaterHandler,
				event = "EVENT_OBJECT_BUFF_REMOVED",
				filter = { objectId = data.objectId, buffId = data.buffId },
				flags = { cfilter = true }
			},
		}
	}
	return content
end
```

## Смотрите также
- [object.IsValidBuff](function.object.IsValidBuff)
- [common.GetAbsTimeMs](../common/function.common.GetAbsTimeMs)