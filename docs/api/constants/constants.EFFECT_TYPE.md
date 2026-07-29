## EFFECT_TYPE

Определяет тип эффекта на предмете или умении.

### Список значений

- **`EFFECT_TYPE_UNKNOWN`** (`number`) - не используется.

- **`EFFECT_TYPE_COOLDOWN_STARTED`** (`number`) - начался кулдаун.

- **`EFFECT_TYPE_COOLDOWN_FINISHED`** (`number`) - кулдаун закончился.

- **`EFFECT_TYPE_COOLDOWN_CHANGED`** (`number`) - активный кулдаун изменил время неестественным образом. Например был уменьшен или увеличен эффектом и тп.

- **`EFFECT_TYPE_SPELL_PREPARED`** (`number`) - заклинание приготовлено к использованию.

- **`EFFECT_TYPE_SPELL_ACTIVE_STATE_CHANGED`** (`number`) - у заклинания изменено состояние активности.