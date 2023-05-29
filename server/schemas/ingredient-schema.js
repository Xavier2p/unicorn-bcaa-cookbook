'use strict';

const createIngredientSchema = {
    type: 'object',
    properties: {
        name: { type: 'string' },
        alternativeNames: { type: 'array' },
        imageId: { type: 'string' },
        unit: { type: 'string' },
    },
    required: ['name', 'alternativeNames', 'imageId', 'unit'],
    additionalProperties: false,
};

const validateIngredientSchema = {
    type: 'object',
    properties: {
        _id: { type: 'string' },
    },
    required: ['_id'],
    additionalProperties: false,
};

const listIngredientSchema = {
    type: 'object',
    properties: {},
    required: [],
    additionalProperties: false,
};

const deleteIngredientSchema = {
    type: 'object',
    properties: {
        _id: { type: 'string' },
    },
    required: ['_id'],
    additionalProperties: false,
};

const viewIngredientSchema = {
    type: 'object',
    properties: {
        _id: { type: 'string' },
    },
    required: ['_id'],
    additionalProperties: false,
};

const updateIngredientSchema = {
    type: 'object',
    properties: {
        _id: { type: 'string' },
        name: { type: 'string' },
        alternativeNames: { type: 'array' },
        imageId: { type: 'string' },
        unit: { type: 'string' },
        valid: { type: 'boolean' },
        fusion: { type: 'string' },
    },
    required: ['_id'],
    additionalProperties: false,
};

const mergeIngredientSchema = {
    type: 'object',
    properties: {
        _id: { type: 'string' },
    },
    required: ['_id'],
    additionalProperties: false,
};

module.exports = {
    createIngredientSchema,
    validateIngredientSchema,
    listIngredientSchema,
    deleteIngredientSchema,
    viewIngredientSchema,
    updateIngredientSchema,
    mergeIngredientSchema,
};
