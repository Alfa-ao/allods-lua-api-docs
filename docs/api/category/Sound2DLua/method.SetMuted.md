# Sound2DLua:SetMuted

Устанавливает статус заглушения звука.

## Описание

```lua
Sound2DLua:SetMuted( isMuted: boolean )
```

Устанавливает статус заглушения звука.

## Список параметров

- **`isMuted`** (`boolean`) - Устанавливаемый статус заглушения.

## Возвращаемые значения

Возвращаемое значение отсутствует.

## Примеры

### Заглушение воспроизводимого звука

```lua
importantSound:Play()
if sound:IsPlaying() then
    sound:SetMuted(true)
end
```