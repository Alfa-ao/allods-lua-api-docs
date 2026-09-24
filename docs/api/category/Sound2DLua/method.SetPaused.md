# Sound2DLua:SetPaused

Ставит или снимает звук с паузы.

## Описание

```lua
Sound2DLua:SetPaused( isPaused: boolean )
```

Ставит или снимает звук с паузы.

## Список параметров

- **`isPaused`** (`boolean`) - Устанавливаемый статус паузы.

## Возвращаемые значения

Возвращаемое значение отсутствует.

## Примеры

### Базовый пример

```lua
if sound:IsPlaying() then
    sound:SetPaused( true )
end
```